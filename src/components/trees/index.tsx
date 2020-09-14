import React from 'react'
import Title from '../common/Title'
import DemoSection from '../common/DemoSection'
import Typography from '@material-ui/core/Typography'
import { default as AntDTree } from './AntDTree'
import { default as BlueprintTree } from './BlueprintTree'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  treesWrapper: {
    maxWidth: '850px',
    margin: '0 auto',
  },
})

const Trees = () => {
  const classes = useStyles()
  return (
    <div className={classes.treesWrapper}>
      <Title>Tree Demos</Title>
      <DemoSection
        href='https://ant.design/components/tree/'
        linkText='Ant Design Tree'
      >
        <Typography
          variant='subtitle2'
          gutterBottom
          style={{ textAlign: 'left' }}
        >
          1. <code>onCheck</code> and <code>onSelect</code> are two different
          events. If we want to have the checkboxes checked{' '}
          <code>onSelect</code>, checked keys will have to be controlled.
        </Typography>
        <AntDTree />
      </DemoSection>

      <DemoSection
        style={{
          padding: '1rem',
          paddingBottom: '0',
          textAlign: 'left',
        }}
      >
        <Typography variant='subtitle2' gutterBottom>
          2. All of libraries and the trees they provided just come in one size.
        </Typography>
        <Typography variant='subtitle2' gutterBottom>
          3. We can either change the size by getting the ant d classnames and
          updating those.
        </Typography>
        <Typography variant='subtitle2' gutterBottom>
          4. Or scale the whole tree by using <code>transform: scale(2)</code>{' '}
          This messes up the flow of the page because only the original
          dimensions are used for calculated the wrapping element's dimension.
        </Typography>
        <Typography variant='subtitle2' gutterBottom>
          5. Here is an example of changing size of tree by scaling. The
          wrapping <code>div</code> 's background color has been set to yellow.
          As you can see, the scaled tree is much bigger than the wrapping div.
        </Typography>
      </DemoSection>
      <DemoSection
        style={{
          backgroundColor: '#ffffb2',
          padding: 0,
          margin: '1rem',
        }}
      >
        <AntDTree transformScale={1.25} />
      </DemoSection>
      <DemoSection
        style={{ marginTop: '5rem' }}
        href='https://blueprintjs.com/docs/#core/components/tree'
        linkText='Blueprint Tree'
      >
        <BlueprintTree />
      </DemoSection>
    </div>
  )
}

export default Trees
