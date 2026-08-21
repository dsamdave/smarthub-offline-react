



const ButtonComp = ({ btnText, color, bgc, width }) => {
  return (
    <button className="custom-button"
        style={{color, backgroundColor:bgc, width: width ? width : null}}
      >
      {btnText}
    </button>
  )
}

export default ButtonComp