import { Meta, StoryObj } from '@storybook/react'
import Main from '.'

const meta: Meta = {
  title: 'Components/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

export const Default: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    title: 'Boilerplate Next App Router',
    description: 'TypeScript, ReactJS, NextJS e TailwindCSS'
  }
}
