import React, { useState } from 'react'
import { Checkbox } from 'antd'

const CheckboxGroup = Checkbox.Group

export const I18N: React.FC = () => {
  const [checkedList, setCheckedList] = useState<any>([])

  const onChange = (list: any[]) => {
    setCheckedList(list)
  }

  return <></>
}
