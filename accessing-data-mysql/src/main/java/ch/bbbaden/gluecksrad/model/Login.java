package ch.bbbaden.gluecksrad.model;

public class Login {

    public Login() {
    }

    public UserEntity checkLoginRequest(Iterable<UserEntity> users, UserEntity user){
       for (UserEntity currentUser : users) {
           if(user.getUserName().equals(currentUser.getUserName())&&user.getPassword().equals(currentUser.getPassword())){
               return currentUser;
           }
       }
       return null;
   }
}
