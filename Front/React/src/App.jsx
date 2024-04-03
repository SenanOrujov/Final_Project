import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import AdminLayout from "./Admin/Pages/AdminLayout";
import Actors from "./Admin/Pages/Actors";
import { QueryClient, QueryClientProvider } from "react-query";
import Genre from "./Admin/Pages/Genre";
import Language from "./Admin/Pages/Language";
import Director from "./Admin/Pages/Director";
import Cinema from "./Admin/Pages/Cinema";
import Hall from "./Admin/Pages/Hall";
import HallType from "./Admin/Pages/HallType";
import AddPage from "./Admin/components/Cinema/AddPage";
import EditPage from "./Admin/components/Cinema/EditPage";
import Movies from "./Admin/Pages/Movies";
import EditMovie from "./Admin/components/Movie/EditMovie";
import AddMovie from "./Admin/components/Movie/AddMovie";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='/admin/actors' element={<Actors />} />
            <Route path='/admin/genre' element={<Genre />} />
            <Route path='/admin/language' element={<Language />} />
            <Route path='/admin/director' element={<Director />} />
            <Route path='/admin/cinema' element={<Cinema />} />
            <Route path='/admin/cinema/add' element={<AddPage />} />
            <Route path='/admin/cinema/edit' element={<EditPage />} />
            <Route path='/admin/hall' element={<Hall />} />
            <Route path='/admin/halltype' element={<HallType />} />
            <Route path='/admin/movies' element={<Movies />} />
            <Route path='/admin/movies/add' element={<AddMovie />} />
            <Route path='/admin/movies.edit' element={<EditMovie />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
