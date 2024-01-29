import { Request, Response } from 'express';
import { DeleteMovieService } from '../../services/movie/RemoveMovie'

class RemoveMovieController {
  async handle(req: Request, res: Response) {


    const { id } = req.params;

    const deleteMovie = new DeleteMovieService()

    const order = await deleteMovie.execute({ id })


    return res.json({ message: `Filme ${order.title} deletado com sucesso!` })
  }
}

export { RemoveMovieController }