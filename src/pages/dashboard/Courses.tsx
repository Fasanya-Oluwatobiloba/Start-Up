import LevelFiveLayout from "../../layout/LevelFiveLayout"
import LevelFourLayout from "../../layout/LevelFourLayout"
import LevelOneLayout from "../../layout/LevelOneLayout"
import LevelThreeLayout from "../../layout/LevelThreeLayout"
import LevelTwoLayout from "../../layout/LevelTwoLayout"

const Courses = () => {
  return (
	<div className="bg-purple-50 px-3 py-2 rounded-2xl mx-3 my-3">
		<h1 className="text-4xl font-bold pt-4 pl-2 text-purple-600">COURSES</h1>	
	  <LevelOneLayout />
	  <LevelTwoLayout />
	  <LevelThreeLayout />
	  <LevelFourLayout/>
	  <LevelFiveLayout />
	</div>
  )
}

export default Courses
