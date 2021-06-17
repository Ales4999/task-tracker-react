import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
           <h1 /*style= {headerStyle}*/ >{ title }</h1> 
            <Button 
                text='Add' 
                color='green' 
                onClick={onClick}
            /> 
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.protoTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS Styling
// const headerStyle = {
//     color: "white",
//     backgroundColor: "DodgerBlue",
//     padding: "10px",
//     fontFamily: "Arial"
// }

/*Use className to define what style on your
index.css page should a component have */

export default Header