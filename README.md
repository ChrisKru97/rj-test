### Info

Try to complete as many tasks as You can in reasonable time

### Tasks:

4. Git
- Save all the finished tasks into commit with message `added tasks` (You will need to do rebase)
- Update the message of commit with message `added tasks` to say: `added and finished tasks`
- Revert commit with message `commit to be reverted`

1. Prettier
- Add the package
- Configure the prettier to use single quote everywhere
- Make sure the prettier prettifies the source files before start (hint: use package.json files for it and search for npm CLI scripts)

2. Next
- Edit `QrBox.js` so that it renders Qr code with correct data (use some package from npm)
- Create context with selected tab state
- Connect `Tabs` to the context
- Connect `Alert` to the context and display selected tab index
- Add new color `primary-yellow` to the Tailwind theme with value `#FABB00`
- Optimize the code however You like :)

3. Gitlab CI
- Create gitlab ci configuration file that will have build stage
- Make the build stage run only on main(master) branch
- Save the artifacts on successful build (.out folder)
