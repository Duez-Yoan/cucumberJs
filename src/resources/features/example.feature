#language: fr
Fonctionnalité: Site Playwright test 1

  @test
  Scénario: Ouvrir le site Fnac
    Étant donné que j'ouvre le site Fnac
    Alors je devrais voir le titre "Fnac : Informatique, Smartphones, livres, jeux vidéo, photos, jouets, électroménager neuf et occasion."
    Quand je cherche le produit "IPHONE"

  @test
  Scénario: Ouvrir le site Darty
    Étant donné que j'ouvre le site Darty
    Alors je devrais voir le titre "Electroménager, High tech le contrat de confiance - Darty"
