import React, { useState, MouseEvent } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Dashboard from "../Dashboard";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Unstable_Grid2";

interface Task {
  id: string;
  name: string;
}

interface ToDoListProps {
  title: string;
  subheader?: string;
  list: Task[];
}

export default function ToDoList({ title, subheader, list }: ToDoListProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const [tableList, setTableList] = useState(list);

  const handleClickComplete = (taskId: string) => {
    debugger;
    const tasksCompleted = selected.includes(taskId)
      ? selected.filter((value) => value !== taskId)
      : [...selected, taskId];

    setSelected(tasksCompleted);
  };

  const handleDelete = (taskId: string) => {
    const tempTableList = tableList.filter((e: any) => {
      return e.id !== taskId;
    });
    setTableList(tempTableList);
  };

  return (
    <Grid container spacing={1}>
      <Grid xs={6} md={6} lg={6}></Grid>
      <Grid xs={6}>
        <h1>Task</h1>
        <Card>
          <CardHeader title={title} subheader={subheader} />
          {tableList.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleDelete={() => handleDelete(task.id)}
              checked={selected.includes(task.id)}
              onChange={() => handleClickComplete(task.id)}
            />
          ))}
        </Card>
      </Grid>
    </Grid>
  );
}

ToDoList.propTypes = {
  list: PropTypes.array.isRequired,
  subheader: PropTypes.string,
  title: PropTypes.string.isRequired,
};

interface TaskItemProps {
  task: Task;
  handleDelete: () => void;
  checked: boolean;
  onChange: () => void;
}

function TaskItem({ task, handleDelete, checked, onChange }: TaskItemProps) {
  const [open, setOpen] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleMarkComplete = () => {
    handleCloseMenu();
    console.info("MARK COMPLETE", task.id);
  };

  const handleShare = () => {
    handleCloseMenu();
    console.info("SHARE", task.id);
  };

  const handleEdit = () => {
    handleCloseMenu();
    console.info("EDIT", task.id);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "stretch" }}
    >
      <Dashboard />

      <Box sx={{ height: "fit-content", maxHeight: "auto" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            pl: 1,
            pr: 1,
            py: 0.5,
            borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
            ...(checked && {
              color: "text.disabled",
              textDecoration: "line-through",
            }),
          }}
        >
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={onChange} />}
            label={task.name}
            sx={{ flexGrow: 1, m: 0 }}
          />

          <IconButton
            color={open ? "inherit" : "default"}
            onClick={handleOpenMenu}
          >
            <MoreVertIcon />
          </IconButton>
        </Stack>
      </Box>
      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleMarkComplete}>Mark Complete</MenuItem>
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleShare}>Share</MenuItem>
        <MenuItem onClick={handleDelete} sx={{ color: "error.main" }}>
          Delete
        </MenuItem>
      </Popover>
    </Box>
  );
}

TaskItem.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
};
