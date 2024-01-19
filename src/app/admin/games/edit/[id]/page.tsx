'use client'

import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import {
  Button,
  Checkbox,
  ColorPicker,
  Form,
  Input,
  InputNumber,
  message,
  Spin,
  Switch,
  Upload,
} from 'antd'
import { useParams, useRouter } from 'next/navigation'

import { PlusOutlined } from '@ant-design/icons'

import { locales } from '~/i18n'

const FormDisabledDemo = () => {
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()

  const [spinning, setSpinning] = useState<boolean>(false)

  function onFinish() {
    const data = form.getFieldsValue(true)
    if (data.imgUrl[0]?.response) {
      data.imgUrl = data.imgUrl[0].response.url
    } else {
      data.imgUrl = data.imgUrl[0].url
    }
    if (data.icon[0]?.response) {
      data.icon = data.icon[0].response.url
    } else {
      data.icon = data.icon[0].url
    }
    setSpinning(true)
    fetch(`/admin/games/edit/${data.id}/api`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 1) {
          messageApi.open({
            type: 'success',
            content: '编辑成功',
          })
          setSpinning(false)
        }
      })
      .catch(() => {
        setSpinning(false)
      })
  }
  const router = useRouter()

  const { id } = useParams()

  const { isPending, isSuccess, data } = useQuery({
    queryKey: ['editRepoData'],
    queryFn: () => fetch(`/admin/games/api?id=${id}`).then((res) => res.json()),
    staleTime: 1,
  })
  const [isOver, setIsOver] = useState(false)

  useEffect(() => {
    if (isSuccess) {
      if (!data) {
        message.open({
          type: 'error',
          content: '未找到该记录',
        })
        return
      }
      console.log('🚀 ~ useEffect ~ data:', data)

      data.icon = [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: data.icon,
        },
      ]
      data.imgUrl = [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: data.imgUrl,
        },
      ]
      setIsOver(true)
      form.setFieldsValue(data)
    }
  }, [isSuccess])

  if (isPending) {
    return (
      <div className="example">
        <Spin />
      </div>
    )
  }
  if (isSuccess && !data) {
    return (
      <>
        {contextHolder}
        <div className="flex w-full justify-start">
          <Button
            type="primary"
            onClick={() => {
              router.back()
            }}
          >
            返回上一页
          </Button>
        </div>
      </>
    )
  }

  if (isSuccess && !isOver) {
    return (
      <div className="example">
        <Spin />
      </div>
    )
  }

  return (
    <>
      <Spin spinning={spinning} fullscreen />
      {contextHolder}
      <div className="flex w-full justify-start">
        <Button
          type="primary"
          onClick={() => {
            router.back()
          }}
        >
          返回上一页
        </Button>
      </div>
      {isSuccess && data && (
        <Form
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          className="w-full"
          onFinish={onFinish}
          initialValues={data}
        >
          <Form.Item
            label="游戏名称"
            rules={[{ required: true, message: '请输入游戏名称' }]}
          >
            <Form.Item name="name">
              <Input />
            </Form.Item>
            <Form.Item label="翻译语言：" name="name_lg">
              <Checkbox.Group options={locales} />
            </Form.Item>
          </Form.Item>

          <Form.Item
            label="游戏所属颜色"
            name="color"
            normalize={(e) => e.toHexString()}
            rules={[{ required: true, message: '请选择颜色' }]}
          >
            <ColorPicker />
          </Form.Item>

          <Form.Item
            label="Volatility"
            rules={[{ required: true, message: '请输入Volatility' }]}
          >
            <Form.Item name="volatility">
              <Input />
            </Form.Item>
            <Form.Item label="翻译语言：" name="volatility_lg">
              <Checkbox.Group options={locales} />
            </Form.Item>
          </Form.Item>

          <Form.Item
            label="RTP"
            name="rtp"
            rules={[{ required: true, message: '请输入RTP' }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="游戏介绍"
            rules={[{ required: true, message: '请输入游戏介绍' }]}
          >
            <Form.Item name="content">
              <Input />
            </Form.Item>
            <Form.Item label="翻译语言：" name="content_lg">
              <Checkbox.Group options={locales} />
            </Form.Item>
          </Form.Item>
          <Form.Item label="是否热门" name="isNew">
            <Switch />
          </Form.Item>
          <Form.Item label="是否是新游戏" name="isHot">
            <Switch />
          </Form.Item>
          <Form.Item
            label="游戏图片"
            name="imgUrl"
            valuePropName="fileList"
            getValueFromEvent={(e) => {
              if (Array.isArray(e)) {
                return e
              }
              return e && e.fileList
            }}
            rules={[{ required: true, message: '请上传游戏图片' }]}
          >
            <Upload
              action="/admin/upload/api"
              listType="picture-card"
              maxCount={1}
            >
              <button style={{ border: 0, background: 'none' }} type="button">
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>上传</div>
              </button>
            </Upload>
          </Form.Item>
          <Form.Item
            label="游戏图标"
            name="icon"
            valuePropName="fileList"
            getValueFromEvent={(e) => {
              if (Array.isArray(e)) {
                return e
              }
              return e && e.fileList
            }}
            rules={[{ required: true, message: '请上传图标' }]}
          >
            <Upload
              action="/admin/upload/api"
              listType="picture-card"
              maxCount={1}
            >
              <button style={{ border: 0, background: 'none' }} type="button">
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>上传</div>
              </button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  )
}

export default () => <FormDisabledDemo />
