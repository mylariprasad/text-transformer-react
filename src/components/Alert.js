import React from 'react'

export default function Alert(props) {
  return (
    // props.alert&& is used because there is a error as props.alert is null. So, props.alert&& it tells that if the props.alert is not null evaluate further or else skip it.
    <div style={{height: '50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong> {props.alert.msg}
    </div>}
    </div>
  )
}
