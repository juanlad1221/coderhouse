 const Validate = {
     Email:(email) => {
        let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email) ? true : false;
        },
     Numeric:(nro) => {
        if (Number(nro)) {
            return true
        }else{
            return false
        }
        },
    Precense:(element) => {
        if(element.length === 0){
            return false
        }else{
            return true
        }
    }
 }
    
export default Validate