
//function mdp(){
//  min = 'abcdefghijklmnopqrstuvwxyz';
  //maj = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //nbr = '0123456789';
  //spc = '!?';
  //all = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?';


//}
const generateRandomString =
    (num) => {
      const characters =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?';
      let result1 = Math.random().toString(36).substring(0, num);

      return result1;
    }

             console.log(generateRandomString(16));