export default interface Congressperson {
  id: string,
  name: string,
  title: 'Senator' | 'Representative',
  party: string,
  state: string,
  yearsServed: number,
}