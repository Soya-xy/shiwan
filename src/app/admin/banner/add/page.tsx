'use client'

import { useState } from 'react'
import { Button, ColorPicker, Form, Input, message, Spin, Upload } from 'antd'
import { useRouter } from 'next/navigation'

import { PlusOutlined } from '@ant-design/icons'

const FormDisabledDemo = () => {
  const [spinning, setSpinning] = useState<boolean>(false)

  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()

  function onFinish() {
    setSpinning(true)
    fetch('/admin/banner/add/api', {
      method: 'POST',
      body: JSON.stringify(form.getFieldsValue(true)),
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
      >
        <Form.Item
          label="轮播图名称"
          rules={[{ required: true, message: '请输入轮播图名称' }]}
        >
          <Form.Item name="name">
            <Input />
          </Form.Item>
          {/* <Form.Item label="翻译语言：" name="name_lg">
            <Checkbox.Group options={locales} />
          </Form.Item> */}
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
          label="游戏介绍"
          rules={[{ required: true, message: '请输入游戏介绍' }]}
        >
          <Form.Item name="content">
            <Input />
          </Form.Item>
          {/* <Form.Item label="翻译语言：" name="content_lg">
            <Checkbox.Group options={locales} />
          </Form.Item> */}
        </Form.Item>

        <Form.Item
          label="轮播图链接"
          rules={[{ required: true, message: '请输入轮播图链接' }]}
        >
          <Form.Item name="link">
            <Input />
          </Form.Item>
        </Form.Item>

        <Form.Item
          label="轮播图片"
          name="imgUrl"
          normalize={(e) => e?.file?.response?.url}
          rules={[{ required: true, message: '请上传游戏图片' }]}
        >
          <Upload
            action="/admin/upload/api"
            listType="picture-card"
            multiple={false}
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
          normalize={(e) => e?.file?.response?.url}
          rules={[{ required: true, message: '请上传图标' }]}
        >
          <Upload
            action="/admin/upload/api"
            listType="picture-card"
            multiple={false}
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
