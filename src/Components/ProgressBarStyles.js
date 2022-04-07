const customStepperStyle = {
    stepper: {
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "space-around",
      padding: 0,
      width: "100%",
    },
  
    stepper__step: {
      position: "relative",
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
    },
  
    stepper__step__index: {
      width: "30px",
      height: "30px",
      lineHeight: "30px",
      borderRadius: "50%",
      background: "#DCDCDC",
      color: "#2F3554",
      textAlign: "center",
      marginBottom: "5px",
    },
  
    stepper__step__label: {
      color: "#999",
      margin: 0,
    },
  
    labelContainer: {
      display: "flex",
      flexFlow: "column nowrap",
      alignItems: "center",
    },
  
    linearProgress: {
      flex: "1 1 auto",
      position: "absolute",
      top: 12,
      left: "calc(-50% + 20px)",
      right: "calc(50% + 20px)",
      backgroundColor: "rgb(78, 108, 153, 0.5)",
    },
  
    bar: {
      backgroundColor: "#4E6C99",
    },
  
    currentStep: {
      backgroundColor: "#4E6C99 !important",
      color: "#fff",
      fontWeight: "500",
    },
  
    done: {
      backgroundColor: "#2F3554 !important",
      color: "#fff",
      fontWeight: "500",
    },
  };