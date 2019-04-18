import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer className="page-footer font-small bg-dark text-white mt-5 p-4 text-center">

          Copyright &copy; {new Date().getFullYear()} Starlife Furnitures
    </footer>
      </div>
    )
  }
}
