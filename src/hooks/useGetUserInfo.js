export const useGetUserInfo = ()=> {
    const {name, isAuth, photo, userID} = JSON.parse(localStorage.getItem("auth"))


    return {name, isAuth, photo, userID}
}


  