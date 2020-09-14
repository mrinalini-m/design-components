import React, { FC, ReactNode } from 'react'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import { createUseStyles } from 'react-jss'

const useJSSStyles = createUseStyles({
  demoWrapper: {
    padding: '2rem',
    margin: '0 auto',
  },
})

const useStyles = makeStyles(() =>
  createStyles({
    paddingBottom: {
      paddingBottom: '1rem',
    },
  })
)

interface DemoSectionProps {
  href?: string
  linkText?: string
  children: ReactNode
  style?: Record<string, string | number>
}

const DemoSection: FC<DemoSectionProps> = ({
  href,
  linkText,
  children,
  style = {},
}: DemoSectionProps) => {
  const jssClasses = useJSSStyles()
  const classes = useStyles()
  return (
    <div className={jssClasses.demoWrapper} style={style}>
      {href && linkText && (
        <Typography variant='h4' gutterBottom className={classes.paddingBottom}>
          <Link href={href}>{linkText}</Link>
        </Typography>
      )}
      {children}
    </div>
  )
}

export default DemoSection
