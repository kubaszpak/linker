import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
    palette: {
        secondary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff'
        }
    }
})

export default theme;