import PropTypes from 'prop-types'

const Button = ({text, color}) => {
    return (
        <button style={{backgroundColor: color}} 
        className='btn'>{ text }</button>  
    )
}

Button.defaultProps = {
    title: 'Add',
    color: 'steelblue'
}

Button.protoTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default Button
