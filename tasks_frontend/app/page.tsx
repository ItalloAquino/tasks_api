// app/page.tsx
import axios from 'axios';
import RootLayout from './layout';

interface Task {
  id: number;
  title: string;
  description: string;
}

const Page = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/tasks/');
  const tasks = response.data;

  return (
    <div>
      {tasks.map((task: Task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

Page.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
}

export default Page;
