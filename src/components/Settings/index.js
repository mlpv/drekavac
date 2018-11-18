import React from 'react'
//import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

class Settings extends React.Component {
  render() {
    const { userStore } = this.props
    return (
      <div>
        <div>
          name:
          <input
            type="text"
            value={userStore.user.name}
            onChange={e => userStore.setName(e.target.value)}
          />
        </div>
        <div>
          dci:
          <input
            type="text"
            value={userStore.user.dci}
            onChange={e => userStore.setDci(e.target.value)}
          />
        </div>
      </div>
    )
  }
}

export default inject(({ rootStore: { userStore } }) => ({
  userStore,
}))(observer(Settings))