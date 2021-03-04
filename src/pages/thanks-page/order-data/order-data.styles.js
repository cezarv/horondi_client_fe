import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  tableCell: ({ isLightTheme }) => ({
    textAlign: 'center',
    width: '25%',
    color: !isLightTheme ? '#ffffffff' : '#363636',
    fontSize: 15,
    fontWeight: 500,
    borderTop: isLightTheme ? '1px solid #636262' : '1px solid #ffffffff',
    borderBottom: isLightTheme ? '1px solid #636262' : '1px solid #ffffffff'
  }),
  titleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cartActionButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    minHeight: 40
  },
  thunksInfoTitle: ({ isLightTheme }) => ({
    fontSize: 19,
    color: !isLightTheme ? '#ffffff' : '#000000',
    fontWeight: 500,
    alignSelf: 'flex-start'
  }),
  orderDataContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column'
  },
  tableHeader: ({ isLightTheme }) => ({
    width: '100%',
    paddingBottom: 10,
    paddingTop: 10,
    '& >th': {
      padding: 8,
      textAlign: 'center'
    }
  }),
  result: ({ isLightTheme }) => ({
    width: '100%',
    borderBottom: isLightTheme ? '1px solid #636262' : '1px solid #ffffffff',
    display: 'flex',
    marginBottom: '5%',
    padding: '2% 0 2% 0'
  }),

  resultTitle: ({ isLightTheme }) => ({
    width: '50%',
    color: !isLightTheme ? '#ffffffff' : '#363636',
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'start',
    paddingLeft: '8%'
  }),
  resultStatus: ({ isLightTheme }) => ({
    width: '25%',
    color: !isLightTheme ? '#ffffffff' : '#363636',
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center'
  }),
  resultTotalSum: ({ isLightTheme }) => ({
    width: '25%',
    color: !isLightTheme ? '#ffffffff' : '#343434',
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center'
  })
}));