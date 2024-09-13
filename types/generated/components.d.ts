import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionRichtext extends Schema.Component {
  collectionName: 'components_section_richtexts';
  info: {
    displayName: 'richtext';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    paragraph: Attribute.String;
    richtext_button: Attribute.Component<'blocks.button', true>;
  };
}

export interface SectionImageBanner extends Schema.Component {
  collectionName: 'components_section_image_banners';
  info: {
    displayName: 'Image banner';
    description: '';
  };
  attributes: {
    banner_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface SectionBannerSlideshow extends Schema.Component {
  collectionName: 'components_section_banner_slideshows';
  info: {
    displayName: 'banner Slideshow';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    slideshow_tabs: Attribute.Component<'blocks.slideshow-images', true>;
  };
}

export interface BlocksSlideshowImages extends Schema.Component {
  collectionName: 'components_blocks_slideshow_images';
  info: {
    displayName: 'slideshow_images';
  };
  attributes: {
    slideshow_image: Attribute.Media<'images', true>;
    slideshow_heading: Attribute.String;
    slideshow_paragraph: Attribute.String;
    slideshow_button_text: Attribute.String;
    slideshow_button_url: Attribute.String;
  };
}

export interface BlocksRichtextButton extends Schema.Component {
  collectionName: 'components_blocks_richtext_buttons';
  info: {
    displayName: 'richtext_button';
  };
  attributes: {};
}

export interface BlocksButton extends Schema.Component {
  collectionName: 'components_blocks_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    ButtonText: Attribute.String;
    ButtonURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.richtext': SectionRichtext;
      'section.image-banner': SectionImageBanner;
      'section.banner-slideshow': SectionBannerSlideshow;
      'blocks.slideshow-images': BlocksSlideshowImages;
      'blocks.richtext-button': BlocksRichtextButton;
      'blocks.button': BlocksButton;
    }
  }
}
