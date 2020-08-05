import {createMuiTheme} from '@material-ui/core/styles'
import {grey} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette:{
        primary:{
            main: "#ffffff"
        },
        secondary:grey
    }
})

export default theme;