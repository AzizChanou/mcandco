<template>
  <div
    id="contact"
    class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 flex flex-col lg:flex-row"
  >
    <div class="lg:w-1/2 space-y-6">
      <h1 class="text-2xl font-bold sm:text-3xl">Contactez-nous !</h1>
      <p class="text-xl font-semibold sm:text-2xl">
        Vous avez une idée, un projet, nous <br />
        pouvons vous aider à les concrétiser <br />
        de manière optimale.
      </p>
    </div>
    <form
      action=""
      class="mt-8 lg:w-1/2 lg:grid grid-cols-2 gap-8 space-y-12 lg:space-y-0"
    >
      <div>
        <label for="name" class="sr-only">Nom & Prenoms</label>
        <input
          name="name"
          type="text"
          class="w-full pb-1 text-sm border-gray-300 border-b outline-0"
          placeholder="Nom & Prenoms"
        />
      </div>

      <div>
        <label for="email" class="sr-only">Email</label>
        <input
          name="email"
          type="email"
          class="w-full pb-1 text-sm border-gray-300 border-b outline-0"
          placeholder="Email"
        />
      </div>

      <div>
        <label for="phone" class="sr-only">Numero</label>
        <input
          name="phone"
          type="text"
          class="w-full pb-1 text-sm border-gray-300 border-b outline-0"
          placeholder="Numero"
        />
      </div>

      <div>
        <label for="entreprise" class="sr-only">Entreprise</label>
        <input
          name="entreprise"
          type="text"
          class="w-full pb-1 text-sm border-gray-300 border-b outline-0"
          placeholder="Entreprise"
        />
      </div>

      <div>
        <label for="histoire" class="sr-only">Votre histoire</label>
        <textarea
          name="histoire"
          id=""
          class="w-full pb-1 text-sm border-gray-300 border-b outline-0"
          cols="30"
          rows="10"
          placeholder="Votre histoire"
        ></textarea>
      </div>

      <div class="">
        <button
          type="submit"
          class="inline-block px-5 py-3 ml-3 font-medium text-black bg-transparent border-2 border-black rounded-lg shadow-sm hover:bg-black hover:text-white duration-500"
        >
          Envoyer
        </button>
      </div>
    </form>
  </div>
</template>
