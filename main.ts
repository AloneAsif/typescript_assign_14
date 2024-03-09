// Question no # 15     Changing Guest List:

let guest_list1: string[] = ['ali', 'asim', 'atif', 'rizwan'];

console.log(`${guest_list1[0]} was missing to this event !`);
guest_list1[0] = 'rafay';
for(let guest of guest_list1){
    console.log(`you are invited to walima ${guest}`);
}
