import React, { FC, ReactNode } from 'react'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    padding: {
      padding: '3rem',
      paddingBottom: '0',
    },
  })
)

interface TitleProps {
  children: ReactNode
}

const Title: FC<TitleProps> = ({ children }: TitleProps) => {
  const classes = useStyles()
  return (
    <div className={classes.padding}>
      <Typography variant='h3' gutterBottom>
        {children}
      </Typography>
    </div>
  )
}
export default Title
