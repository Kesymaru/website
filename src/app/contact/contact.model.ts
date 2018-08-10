export class ContactModel{
  public name: string = '';
  public email: string = '';
  public phone: string = '';
  public subject: string = '';
  public message: string = '';
  public sendResume: boolean = false;
  public date: string;

  constructor(){
    this.date = new Date().toString();
  }
}
