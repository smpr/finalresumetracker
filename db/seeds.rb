Info.destroy_all
User.destroy_all
Resume.destroy_all


bob = User.create!(
    email: 'test2@test.com',
    password: '123123123',
    password_confirmation: '123123123'
)
demo = User.create!(
    email: 'demo@demo.com',
    password: '123123123',
    password_confirmation: '123123123'
)
bobinfo = Info.create!(firstName:"Bob",lastName:"Barker",phone: 5555555,linkedIn:"Bob@linkedIn.com", user_id: bob.id)
demoinfo = Info.create!(firstName:"Bob",lastName:"Barker",phone: 5555555,linkedIn:"Bob@linkedIn.com", user_id: demo.id)

bobresume = Resume.create!(company: "The Home Depot", req: 11123, title: "Software Engineer", date: "12/20/18", ar: "No", notes: "No notes", user_id: bob.id)
demoresume = Resume.create!(company: "The Home Depot", req: 11123, title: "Software Engineer", date: "12/20/18", ar: "No", notes: "No notes", user_id: demo.id)