import useTask from '../task/useTask';
import Button from '../Button';

function StepButton(props) {
  return <Button className="step-button" {...props} />;
}

function StepControls({ taskId, index }) {
  const deleteStep = useTask(({ actions: { deleteStep } }) => deleteStep);
  
  const onClick = () => deleteStep(taskId, index);

  return (
    <StepButton icon="trash" label="Delete" onClick={onClick} />
  );
}

export default StepControls;
