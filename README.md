# Project Reset Documentation

## Scaffolding Steps
To set up the project initially, the following steps were followed:

1. **Clone the Repository**
   ```sh
   git clone <repository-url>
   ```
2. **Navigate to Project Directory**
   ```sh
   cd prodev-mobile-app-0x00
   ```
3. **Install Dependencies**
   ```sh
   npm install
   ```
4. **Start the Development Server**
   ```sh
   npx expo start
   ```

## Resetting the Project
To reset the project, run the following command:

```sh
npm run reset-project
```

### Observations
Upon running the reset command, the following changes occurred:

1. The script prompted whether to move existing files to `/app-example` instead of deleting them.
2. The `/app-example` directory was created to store the old project files.
3. The following directories were moved inside `/app-example`:
   - `/app` → `/app-example/app`
   - `/components` → `/app-example/components`
   - `/hooks` → `/app-example/hooks`
   - `/constants` → `/app-example/constants`
   - `/scripts` → `/app-example/scripts`
4. A new `/app` directory was created with fresh files:
   - `app/index.tsx`
   - `app/_layout.tsx`
5. The terminal displayed the following completion message:
   
   ```sh
   ✅ Project reset complete. Next steps:
   1. Run `npx expo start` to start a development server.
   2. Edit app/index.tsx to edit the main screen.
   3. Delete the /app-example directory when you're done referencing it.
   ```

### Next Steps
After resetting the project:
- Run `npx expo start` to restart development.
- Modify `app/index.tsx` to adjust the main screen.
- Remove `/app-example` when old files are no longer needed.

This ensures a clean project state while keeping a backup of previous files.

