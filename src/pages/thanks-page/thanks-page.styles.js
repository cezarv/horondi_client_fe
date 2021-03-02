import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  thanksContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  thunksTitle: ({ isLightTheme }) => ({
    fontSize: 30,
    color: !isLightTheme ? '#ffffff' : '#000000',
    fontWeight: 400,
    marginBottom: 0
  }),

  thunksInfo: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));
