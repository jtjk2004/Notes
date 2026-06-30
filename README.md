# Private Notes Web

Static website and Supabase email confirmation redirect page for Private Notes.

## Deploy to Vercel

1. Create a new GitHub repository.
2. Upload everything inside `PrivateNotesWeb`.
3. In Vercel, import that GitHub repository.
4. Use these settings:
   - Framework preset: `Other`
   - Build command: leave empty
   - Output directory: leave empty
5. Deploy.

## Supabase URL Configuration

After deployment, copy your Vercel URL. Example:

```text
https://private-notes.vercel.app
```

In Supabase:

`Authentication` -> `URL Configuration`

Set `Site URL` to:

```text
https://private-notes.vercel.app
```

Add this `Redirect URL`:

```text
https://private-notes.vercel.app/auth/callback/
```

Use your real Vercel domain instead of the example.

## Android App Redirect

If you want email verification to open this website instead of the Android app, update `SupabaseConfig.AUTH_REDIRECT_URL` in the Android project to:

```text
https://private-notes.vercel.app/auth/callback/
```

Then rebuild the APK.
