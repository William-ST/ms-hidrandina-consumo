### 0. Configurar environments
```
DB_HOST=mysql
DB_USER=admin
DB_PASS=admin123
DB_NAME=hidrandina_db
DB_PORT=3306
```

### 1. Ejecutar con Docker Compose

```bash
docker-compose up --build
```

Levantará **MySQL** y cargará automáticamente los datos del CSV. También expondrá el microservicio en:

```
http://localhost:8000
```

---

### 2. Endpoints disponibles

#### `GET /buscar-consumo/<fecha>`

Consulta casos por código de ubicación:

```
GET http://localhost:8000/buscar-consumo/20230130
```
