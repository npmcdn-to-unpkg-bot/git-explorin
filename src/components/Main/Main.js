import React, { Component, PropTypes } from 'react'
import Highlight from 'react-highlight'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { container, imgContainer, img } from './styles.scss'
import { EditorActionCreators } from 'actions'

let syntax = ''
let filepath = ''
let isImage = false
let imageExt = ['png', 'jpeg', 'svg']
class Main extends Component {

  componentWillReceiveProps = (nextProps) => {
    filepath = nextProps.current.path.split('.')
    if (filepath.length < 2) syntax = 'accesslog'
    else syntax = filepath[filepath.length - 1]
  }

  renderImage = (blob) => {
    let image = document.getElementById('image-holder');
    image.src = 'data:image/bmp;base64,'+ btoa(blob);
  }

  codeOrImage = () => {
    return isImage === false
      ? (
          <Highlight className={syntax}>
            {this.props.current.source}
          </Highlight> 
        )
      : (
        <div className={imgContainer}>
          <img id='image-holder' src='' className={img}/>
        </div>
      )
  }

  componentDidUpdate = () => {
    if(isImage && this.props.current.source !== '') this.renderImage(this.props.current.source)
  }

  render () {
    isImage = imageExt.indexOf(syntax) >= 0 ? true : false
    return (
      <div className={container} id={'code'}>
        {this.codeOrImage()}
      </div>
    )
  }
}

Main.propTypes = {
  current: PropTypes.object.isRequired,
}

export default connect(
  (state) => ({ current: state.Files.current }),
  (dispatch) => (bindActionCreators(EditorActionCreators, dispatch))
  )(Main)
