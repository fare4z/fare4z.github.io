
---

#  **Hands-On Tutorial: Create a Personal Profile and Contact Me App Using Ionic**

---

##Step 0: Prerequisites
Make sure you have installed:

- Node.js (https://nodejs.org/)
- npm (comes with Node.js)
- Ionic CLI  
  Install by running:
  ```bash
  npm install -g @ionic/cli
  ```

---

##Step 1: Create New Ionic App
```bash
ionic start aboutmeApp blank --type=angular
```
- `aboutmeApp` = Project name
- `blank` = Blank template (no extra pages)

Navigate into the project folder:
```bash
cd aboutmeApp
```

---

##Step 2: Update Home Page (Profile Page)

Refer to Ionic UI Component 
https://ionicframework.com/docs/components 

Edit this file:  
**`src/app/home/home.page.html`**

Replace it with:

```html
<ion-header>
  <ion-toolbar color="primary">
    <ion-title>About Me</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">

  <ion-card>
    <img src="assets/profile.jpg" alt="Profile Picture" style="border-radius: 50%; width: 150px; margin: 20px auto; display: block;">
    <ion-card-header>
      <ion-card-title>Fareez Borhanudin</ion-card-title>
      <ion-card-subtitle>Web & Mobile Developer</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      Passionate about building high-quality apps using Ionic, Angular, and modern web technologies.
    </ion-card-content>
  </ion-card>

  <ion-list>
    <ion-item>
      <ion-icon slot="start" name="person-circle-outline"></ion-icon>
      <ion-label position="floating">Full Name</ion-label>
      <ion-input placeholder="Enter your name"></ion-input>
    </ion-item>

    <ion-item>
      <ion-icon slot="start" name="mail-outline"></ion-icon>
      <ion-label position="floating">Email</ion-label>
      <ion-input type="email" placeholder="Enter your email"></ion-input>
    </ion-item>

    <ion-item>
      <ion-icon slot="start" name="call-outline"></ion-icon>
      <ion-label position="floating">Phone Number</ion-label>
      <ion-input type="tel" placeholder="Enter your phone number"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>Gender</ion-label>
      <ion-select placeholder="Select One">
        <ion-select-option value="male">Male</ion-select-option>
        <ion-select-option value="female">Female</ion-select-option>
        <ion-select-option value="other">Other</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label>Date of Birth</ion-label>
      <ion-datetime display-format="DD MMM YYYY" placeholder="Select Date"></ion-datetime>
    </ion-item>

    <ion-button expand="block" color="secondary" class="ion-margin-top">
      Update Profile
    </ion-button>
  </ion-list>

  <ion-grid class="ion-padding-top">
    <ion-row>
      <ion-col size="6">
        <ion-button expand="block" color="tertiary">
          View Portfolio
        </ion-button>
      </ion-col>
      <ion-col size="6">
        <ion-button expand="block" color="success" [routerLink]="['/contact']">
          Contact Me
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>

</ion-content>
```

Make sure you add a **profile picture** inside:  
**`src/assets/profile.jpg`**

---

##Step 3: Generate "Contact Me" Page
Run this command:
```bash
ionic generate page contact
```
This will automatically create the files for you.

or

```bash
ionic generate page contact --standalone false
```
Create file and disable standalone

Fix Contact Me page if using ngMOdules

Open src/app/contact/contact.page.ts.

Look at the top — you will see:

```ts
@Component({
  standalone: true,
  ...
})

```

change true to false

---

##Step 4: Design Contact Me Page

Edit:  
**`src/app/contact/contact.page.html`**

Replace with:

```html
<ion-header>
  <ion-toolbar color="primary">
    <ion-title>Contact Me</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">

  <ion-list>
    <ion-item>
      <ion-icon slot="start" name="person-circle-outline"></ion-icon>
      <ion-label position="floating">Your Name</ion-label>
      <ion-input placeholder="Enter your name"></ion-input>
    </ion-item>

    <ion-item>
      <ion-icon slot="start" name="mail-outline"></ion-icon>
      <ion-label position="floating">Your Email</ion-label>
      <ion-input type="email" placeholder="Enter your email"></ion-input>
    </ion-item>

    <ion-item>
      <ion-icon slot="start" name="chatbubble-ellipses-outline"></ion-icon>
      <ion-label position="floating">Message</ion-label>
      <ion-textarea placeholder="Enter your message"></ion-textarea>
    </ion-item>

    <ion-button expand="block" color="secondary" class="ion-margin-top">
      Send Message
    </ion-button>
  </ion-list>

</ion-content>
```

---

##Step 5: Styling (Optional)

Edit:  
**`src/app/home/home.page.scss`**  
**`src/app/contact/contact.page.scss`**

Add in both files:

```scss
ion-content {
  --background: var(--ion-color-tertiary);
}

ion-item {
  --background: #ffffff;
  border-radius: 10px;
  margin-bottom: 10px;
}

ion-button {
  font-family: var(--ion-font-family);
}
```

---

##Step 6: Run the App
Run the app locally:
```bash
ionic serve
```
It will open automatically in the browser (usually at `http://localhost:8100`).

✅ Test the "Contact Me" button — it should **navigate** to the new page.

---

# Final Structure

```
aboutmeApp/
├── src/
│   ├── app/
│   │   ├── home/
│   │   │   ├── home.page.html
│   │   │   ├── home.page.scss
│   │   ├── contact/
│   │   │   ├── contact.page.html
│   │   │   ├── contact.page.scss
│   ├── assets/
│   │   ├── profile.jpg
```

---

# ✅ CLO

| Skill | What You Learned |
|:---|:---|
| Setup | Installed Ionic CLI, created project |
| Home Page | Created profile page with card, form, and buttons |
| Navigation | Linked button to a new Contact page |
| Contact Page | Built contact form with Ionic components |
| Styling | Customized UI with SCSS |
| Running | Served app locally |

---


**Sources:**  
- [Ionic Framework Documentation](https://ionicframework.com/docs)  - https://ionicframework.com/docs
- [Ionic Angular Navigation Guide](https://ionicframework.com/docs/angular/navigation) - https://ionicframework.com/docs/angular/navigation

---

# Build for Production

Prepare your app for deployment:

```bash
ionic build --prod
```

# Deploy to Web Server

Upload the contents of the www/ folder to your web hosting service.​

# Integrate with Git

Initialize a Git repository and push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin master
```