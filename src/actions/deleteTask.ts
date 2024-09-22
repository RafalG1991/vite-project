export const deleteTaskAction = async ({ request }: {request: Request}) => {
  const formData = await request.formData();
  const id = formData.get('id')?.toString();

  return fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'DELETE',
  });
}