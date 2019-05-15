
import React, { Component } from 'react'
import Banner from './Banner'

export default class Carousel extends Component {
  static defaultProps= {
    banners: [],
  }

  static uiSchema = {
    banners: {
      items: {
        image: {
          'ui:widget': 'image-uploader',
        },
      },
    },
  }


  static getSchema = (props) => {
    return {
      properties: {
        banners: {
          items: {
            properties: {
              image: {
                default: '',
                title: 'admin/editor.carousel.banner.image.title',
                type: 'string',
                widget: {
                  'ui:widget': 'image-uploader',
                }
              }
            },
            title: 'admin/editor.carousel.banner.title',
            type: 'object',
          },
          minItems: 1,
          title: 'admin/editor.carousel.banners.title',
          type: 'array',
        }
      },
      title: 'admin/editor.carousel.title',
      type: 'object',
    }
  }

  render(){
    const {banners} = this.props;
    
    return (
      <div>
        {banners.map((banner, i) => 
          <Banner {...banner} />
        )}
      </div>
    )
  }
}