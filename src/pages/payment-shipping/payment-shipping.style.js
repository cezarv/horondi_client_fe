import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.textColor,
    margin: '50px auto',
    maxWidth: 1280,
    paddingTop: 30,
    '& *': {
      color: `inherit !important`
    },
    '& > h1': {
      textAlign: 'center'
    },
    '& > h2': {
      textAlign: 'left'
    },
    '& > p': {
      lineHeight: 'initial'
    }
  }
}));
