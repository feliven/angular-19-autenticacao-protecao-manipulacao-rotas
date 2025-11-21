import { Usuario, Estatisticas, Postagem, DadosPostagem } from './post.model';

describe('Post Model Interfaces', () => {
  describe('Usuario', () => {
    it('should create a valid Usuario object', () => {
      const usuario: Usuario = {
        nome: 'John Doe',
        avatar: 'avatar.jpg',
      };

      expect(usuario.nome).toBe('John Doe');
      expect(usuario.avatar).toBe('avatar.jpg');
    });

    it('should have required properties', () => {
      const usuario: Usuario = {
        nome: '',
        avatar: '',
      };

      expect(usuario.nome).toBeDefined();
      expect(usuario.avatar).toBeDefined();
    });
  });

  describe('Estatisticas', () => {
    it('should create a valid Estatisticas object', () => {
      const estatisticas: Estatisticas = {
        codigo: 123,
        compartilhamentos: 10,
        comentarios: 5,
      };

      expect(estatisticas.codigo).toBe(123);
      expect(estatisticas.compartilhamentos).toBe(10);
      expect(estatisticas.comentarios).toBe(5);
    });

    it('should have required numeric properties', () => {
      const estatisticas: Estatisticas = {
        codigo: 0,
        compartilhamentos: 0,
        comentarios: 0,
      };

      expect(typeof estatisticas.codigo).toBe('number');
      expect(typeof estatisticas.compartilhamentos).toBe('number');
      expect(typeof estatisticas.comentarios).toBe('number');
    });
  });

  describe('Postagem', () => {
    it('should create a valid Postagem object', () => {
      const postagem: Postagem = {
        id: '1',
        titulo: 'Test Title',
        descricao: 'Test Description',
        imagem: 'test.jpg',
        usuario: {
          nome: 'Jane Doe',
          avatar: 'jane.jpg',
        },
        estatisticas: {
          codigo: 456,
          compartilhamentos: 20,
          comentarios: 15,
        },
      };

      expect(postagem.id).toBe('1');
      expect(postagem.titulo).toBe('Test Title');
      expect(postagem.descricao).toBe('Test Description');
      expect(postagem.imagem).toBe('test.jpg');
      expect(postagem.usuario.nome).toBe('Jane Doe');
      expect(postagem.estatisticas.codigo).toBe(456);
    });

    it('should have all required properties', () => {
      const postagem: Postagem = {
        id: '',
        titulo: '',
        descricao: '',
        imagem: '',
        usuario: { nome: '', avatar: '' },
        estatisticas: { codigo: 0, compartilhamentos: 0, comentarios: 0 },
      };

      expect(postagem.id).toBeDefined();
      expect(postagem.titulo).toBeDefined();
      expect(postagem.descricao).toBeDefined();
      expect(postagem.imagem).toBeDefined();
      expect(postagem.usuario).toBeDefined();
      expect(postagem.estatisticas).toBeDefined();
    });

    it('should contain nested Usuario object', () => {
      const postagem: Postagem = {
        id: '2',
        titulo: 'Post with User',
        descricao: 'Description',
        imagem: 'img.jpg',
        usuario: {
          nome: 'Alice',
          avatar: 'alice.jpg',
        },
        estatisticas: {
          codigo: 100,
          compartilhamentos: 5,
          comentarios: 3,
        },
      };

      expect(postagem.usuario).toBeDefined();
      expect(postagem.usuario.nome).toBe('Alice');
      expect(postagem.usuario.avatar).toBe('alice.jpg');
    });

    it('should contain nested Estatisticas object', () => {
      const postagem: Postagem = {
        id: '3',
        titulo: 'Post with Stats',
        descricao: 'Description',
        imagem: 'img.jpg',
        usuario: {
          nome: 'Bob',
          avatar: 'bob.jpg',
        },
        estatisticas: {
          codigo: 200,
          compartilhamentos: 50,
          comentarios: 30,
        },
      };

      expect(postagem.estatisticas).toBeDefined();
      expect(postagem.estatisticas.codigo).toBe(200);
      expect(postagem.estatisticas.compartilhamentos).toBe(50);
      expect(postagem.estatisticas.comentarios).toBe(30);
    });
  });

  describe('DadosPostagem', () => {
    it('should create a valid DadosPostagem object with empty array', () => {
      const dados: DadosPostagem = {
        postagens: [],
      };

      expect(dados.postagens).toEqual([]);
      expect(Array.isArray(dados.postagens)).toBe(true);
    });

    it('should create a valid DadosPostagem object with postagens', () => {
      const dados: DadosPostagem = {
        postagens: [
          {
            id: '1',
            titulo: 'First Post',
            descricao: 'First Description',
            imagem: 'first.jpg',
            usuario: { nome: 'User1', avatar: 'avatar1.jpg' },
            estatisticas: { codigo: 1, compartilhamentos: 10, comentarios: 5 },
          },
          {
            id: '2',
            titulo: 'Second Post',
            descricao: 'Second Description',
            imagem: 'second.jpg',
            usuario: { nome: 'User2', avatar: 'avatar2.jpg' },
            estatisticas: { codigo: 2, compartilhamentos: 20, comentarios: 10 },
          },
        ],
      };

      expect(dados.postagens.length).toBe(2);
      expect(dados.postagens[0].id).toBe('1');
      expect(dados.postagens[1].id).toBe('2');
    });

    it('should have postagens property', () => {
      const dados: DadosPostagem = {
        postagens: [],
      };

      expect(dados.postagens).toBeDefined();
    });
  });
});
