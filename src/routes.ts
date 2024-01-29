import { Router, Request, Response } from 'express'
import { CreateMovieController } from './controllers/Movie/CreateMovieController'
import { ListMovieController } from './controllers/Movie/ListMoviesController'
import { UpdateMovieController } from './controllers/Movie/UpdateMovieController'
import { RemoveMovieController } from './controllers/Movie/DeleteMovieController'
import { RateMovieController } from './controllers/Movie/RateMovieController'
import { FindUnratedMovieController } from './controllers/Movie/FindUnratedMovieController'

const router = Router();





// rotas movies

router.post('/movie', new CreateMovieController().handle)
router.get('/movies', new ListMovieController().handle)
router.put('/movie/:id', new UpdateMovieController().handle)
router.delete('/movie/:id', new RemoveMovieController().handle)
router.post('/movie/:id/rate', new RateMovieController().handle)
router.get('/movies/unrated', new FindUnratedMovieController().handle)


export { router };