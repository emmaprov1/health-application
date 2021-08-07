export function PhoneValidator (phone:number) {
  const pattern:any = /^\d+$/;
  return pattern.test(phone); // returns a boolean
}
