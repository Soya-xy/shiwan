'use client'

import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { Button, ColorPicker, Form, Input, message, Spin, Upload } from 'antd'
import { useParams, useRouter } from 'next/navigation'

import { PlusOutlined } from '@ant-design/icons'

const FormDisabledDemo = () => {
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()
  const [spinning, setSpinning] = useState<boolean>(false)

  function onFinish() {
    const data = JSON.parse(JSON.stringify(form.getFieldsValue(true)))
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
    fetch(`/admin/banner/edit/${data.id}/api`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 1) {
          setSpinning(false)
          messageApi.open({
            type: 'success',
            content: '创建成功',
          })
        }
      })
      .catch(() => {
        setSpinning(false)
      })
  }
  const router = useRouter()

  const { id } = useParams()

  const { isPending, isSuccess, data } = useQuery({
    queryKey: ['noCache'],
    queryFn: () =>
      fetch(`/admin/banner/api?id=${id}`).then((res) => res.json()),
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

      const icon = [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: data.icon,
        },
      ]
      data.icon = icon
      const imgUrl = [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: data.imgUrl,
        },
      ]
      data.imgUrl = imgUrl
      setIsOver(true)

      setTimeout(() => {
        form.setFieldsValue(data)
      }, 1000)
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
          label="轮播名称"
          rules={[{ required: true, message: '请输入轮播名称' }]}
        >
          <Form.Item name="name">
            <Input />
          </Form.Item>
        </Form.Item>

        <Form.Item
          label="轮播所属颜色"
          name="color"
          normalize={(e) => e.toHexString()}
          rules={[{ required: true, message: '请选择颜色' }]}
        >
          <ColorPicker />
        </Form.Item>

        <Form.Item
          label="轮播介绍"
          rules={[{ required: true, message: '请输入轮播介绍' }]}
        >
          <Form.Item name="content">
            <Input />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="轮播链接"
          rules={[{ required: true, message: '请输入轮播链接' }]}
        >
          <Form.Item name="link">
            <Input />
          </Form.Item>
        </Form.Item>

        <Form.Item
          label="轮播图片"
          name="imgUrl"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) {
              return e
            }
            return e && e.fileList
          }}
          rules={[{ required: true, message: '请上传轮播图片' }]}
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
          label="轮播图标"
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
    </>
  )
}

export default () => <FormDisabledDemo />
