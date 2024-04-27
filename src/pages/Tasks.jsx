import { useContext, useEffect, useState } from "react"
import NavBarBox from "../components/NavBarBox"
import { Box, Typography, Container, Checkbox, IconButton } from "@mui/material"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BottomBarBox from "../components/BottomBarBox"
import { useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import { TaskContext } from "../context/TaskContext";

function Tasks(){

    const loginInfo = useContext(LoginContext)

    const {tasks, setTasks} = useContext(TaskContext)

    const navigate = useNavigate()

    const [taskList, setTaskList] = useState([])
    const [checkedTasks, setCheckedTasks] = useState({})

    const {room_id, house_id} = useParams()

    useEffect(() => {
        if(loginInfo){
            document.body.style.backgroundColor = "white";
            const tasksFiltered = tasks.filter(task => task.id_user === loginInfo.id && task.id_house === parseInt(house_id) && task.id_room === parseInt(room_id));
            setTaskList(tasksFiltered);

            const initialCheckedTasks = {};
            tasksFiltered.forEach(task => {
                initialCheckedTasks[task.id] = false;
            });
            setCheckedTasks(initialCheckedTasks);
        }
        else{
            navigate("/")
        }
    }, [])

    const handleCheck = (id) => {
        const updatedCheckedTasks = { ...checkedTasks, [id]: !checkedTasks[id] };
        setCheckedTasks(updatedCheckedTasks);
        let taskSelect = taskList.find(task => task.id === id)
        taskSelect = {...taskSelect, done: !checkedTasks[id]}
        const updatedTaskList = [...taskList]
        updatedTaskList[id - 1] = taskSelect
        setTaskList(updatedTaskList)
        // ATÉ AQUI TUDO CERTO, NÃO MEXER
    }

    const getTasksNotInTaskList = () => {
        // Filtrar as tarefas em 'tasks' que não estão em 'taskList' e que estão marcadas como 'done: false'
        const tasksNotInTaskList = tasks.filter(task =>
            !task.done && !taskList.some(taskItem => taskItem.id === task.id 
                && taskItem.id_house === task.id_house 
                && taskItem.id_room === task.id_room 
                && taskItem.id_user === task.id_user)
        );
    
        return tasksNotInTaskList;
    };

    useEffect(() => {
        console.log("Teste taskList", taskList)
    }, [taskList])




    useEffect(() => {
        return () => {
            console.log("Dentro do unmount")
            const incompletesTasks = getTasksNotInTaskList()
            setTasks(incompletesTasks)
        }
    }, [])

    return(
        <>
        { loginInfo &&
         <Container sx={{display: "flex", flexDirection: "row", }}>
            <NavBarBox title={`Tarefas de ${loginInfo.user}`}/>
            <Box sx={{display: "flex", flexDirection : "column", justifyContent: "flex-start",  marginLeft: "30px", position: "absolute", top: "150px"}}>
            {taskList &&
                taskList.map((task, index) => (
                    <Box key={index} sx={{display: "flex", flexDirection: "row", alignItems: "center",  gap: 0.5}}>
                    <Checkbox
                        checked={checkedTasks[task.id]}
                        onChange={() => handleCheck(task.id)}
                        inputProps={{ 'aria-label': 'controlled' }} 
                        sx={{color: "primary.contrastText", '&.Mui-checked': {
                            color: "secondary.main"
                        }}}
                        />
                    <Typography variant="h6" sx={{color: "primary.contrastText"}}> {task.name} </Typography>                    
                    </Box>
                ))
            }
                <Box sx={{display: "flex", flexDirection: "row", alignItems: "center",  gap: 0.5}}>
                    <IconButton onClick={() => navigate(`/addTask/${room_id}/${house_id}`)} aria-label="Add" sx={{color: "primary.contrastText"}}>
                        <AddCircleIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{color: "secondary.light"}}> Nova Task </Typography>                    
                </Box>
            </Box>
        </Container>
        }
            <BottomBarBox tasks="tarefasPendentes"></BottomBarBox>
        </>
    )
}

export default Tasks