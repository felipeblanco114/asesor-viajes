import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', 
    alignItems: 'center', 
    width: '94%', 
    marginLeft: 'auto', 
    marginRight: 'auto', 
    justifyContent: 'space-between', 
    marginTop: '.3rem',
    marginBottom: '.3rem',
    borderBottom: '.1px solid rgb(245,245,245)'
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
}));