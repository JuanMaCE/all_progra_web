# Secret Link Project

## Description
This project is a web application similar to scrt.link, where users can hide secrets and reveal them **only once**.  
The application is built using:

- **Frontend**: React + TypeScript (Vite)
- **Backend**: Django + Python
- **Database**: Redis (for temporary storage)
- **Docker**: for containerization and easy deployment

When a secret is revealed, it is **automatically deleted** from the database and cannot be accessed again.

---

## Prerequisites
- Docker
- Docker Compose

---

## Project Structure
```

all_progra_web/
│
├─ backend/
│   ├─ manage.py
│   ├─ app/
│   │   ├─ api/
│   │   │   ├─ views.py
│   │   │   └─ urls.py
│   │   └─ settings.py
│   ├─ Dockerfile
│   └─ requirements.txt
│
├─ frontend/
│   ├─ src/
│   │   ├─ App.tsx
│   │   ├─ components/
│   │   │   ├─ HideSecret.tsx
│   │   │   └─ RevealSecret.tsx
│   │   └─ main.tsx
│   ├─ package.json
│   └─ vite.config.ts
│
├─ docker-compose.yml
└─ README.md

````

---

## How to Run

1. Clone the repository and navigate to the project folder:

```bash
git clone <your-repo-url>
cd all_progra_web
````

2. Build and start all services with Docker Compose:

```bash
docker-compose up --build
```

3. Open the applications in your browser:

* Frontend: [http://localhost:5173](http://localhost:5173)
* Redis Commander: [http://localhost:8081](http://localhost:8081)

---

## Usage

1. In the frontend, type your secret in the "Hide" section and click **HIDE**.
2. A **key** will be generated and displayed. Copy this key.
3. Go to the "Reveal" section, enter the key, and click **REVEAL**.

   * The secret will appear and **will be deleted automatically** from the database.
   * If you try to reveal it again, an error message will appear.

---

## Notes

* Ensure your `requirements.txt` does **not** include `backports.zoneinfo` if using Python >=3.9.
* Redis is used for **temporary storage only**; all secrets are deleted after being revealed.
* Docker Compose handles all services; no extra configuration is required.

