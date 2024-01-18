'use client'

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Avatar, Button, List } from 'antd'
import { useRouter } from 'next/navigation'

const Home: React.FC = () => {
  const router = useRouter()
  const { data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetch('/admin/api').then((res) => res.json()),
    staleTime: 1,
  })
  return (
    <>
      <div className="mb-3 flex w-full justify-start">
        <Button
          type="primary"
          onClick={() => {
            router.push('/admin/add')
          }}
        >
          添加
        </Button>
      </div>
      <List
        itemLayout="horizontal"
        className="w-full"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page)
          },
          pageSize: 3,
        }}
        dataSource={data}
        renderItem={(item: any, index: number) => (
          <List.Item
            className="bg-white"
            key={index}
            actions={[
              <div className="mt-10 d-center" key={index}>
                <img
                  width={272}
                  alt="logo"
                  src={item.imgUrl}
                  className="mr-4"
                />
                <Button
                  type="primary"
                  onClick={() => {
                    router.push(`/admin/edit/${item.id}`)
                  }}
                >
                  编辑
                </Button>
                <Button danger className="ml-4">
                  删除
                </Button>
              </div>,
            ]}
          >
            <List.Item.Meta
              className="w-[30%] !basis-auto"
              avatar={<Avatar src={item.icon} />}
              title={<p className="text-xl">{item.name}</p>}
              description={
                <div className="flex w-[70%] flex-wrap gap-3">
                  <p className=" text-stone-900">
                    新游: {item.isNew ? '是' : '否'}
                  </p>
                  <p className=" text-stone-900">
                    热门: {item.isHot ? '是' : '否'}
                  </p>
                  <p className=" text-stone-900">
                    volatility: {item.volatility}
                  </p>
                  <p className=" text-stone-900">最多可赢: {item.maxWin}</p>
                  <p className="h-5 w-5" style={{ background: item.color }} />
                </div>
              }
            />
            <div className="">{item.content}</div>
          </List.Item>
        )}
      />
    </>
  )
}

export default Home
