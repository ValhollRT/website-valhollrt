import { Injectable, VERSION } from '@angular/core';

export class ReleaseNoteVersion {
  public version: string;
  public taskFeatures: Set<Task>;
  public taskImprovements: Set<Task>;
  public taskBugs: Set<Task>;
  constructor(version: string, tnf?: Set<Task>, tni?: Set<Task>, tnb?: Set<Task>) {
    this.version = version;
    this.taskFeatures = tnf;
    this.taskImprovements = tni;
    this.taskBugs = tnb;

  }

}

export class Task {
  public commit: string;
  public title: string;
  constructor(c: string, t: string) {
    this.commit = c;
    this.title = t;
  }
}

export enum CategoryReleaseNote {
  FEATURE, IMPROVEMENTS, BUGS
}

@Injectable({
  providedIn: 'root'
})
export class GeneralTextsService {
  public VERSION: string = "Ver. 0.0.5";
  public ODIN: string = "Odin";
  public FEATURE: CategoryReleaseNote.FEATURE;
  public IMPROVEMENTS: CategoryReleaseNote.IMPROVEMENTS;
  public BUGS: CategoryReleaseNote.BUGS;
  public GITHUBTAGSLINK = "https://github.com/VallholRT/Odin/releases/tag/";

  public listReleasedNotesVersion: ReleaseNoteVersion[] = [

    new ReleaseNoteVersion(
      "v0.0.3",
      new Set<Task>()
        .add(new Task("[ODN-0003]", "New SideBar to content all common panels"))
        .add(new Task("[ODN-0001]", "New material panel in Sidebar, to modify properties, diffuse color, ambient color, specular color / Power, and the name of material "))
        .add(new Task("[ODN-0007]", "Edit the names of the container in the Tree node")),
      new Set<Task>()
        .add(new Task("[ODN-0008]", "Move Console debug to the sidebar"))
        .add(new Task("[ODN-0012]", "Select Container in Tree Node binded with the currentMeshSelected service"))),

    new ReleaseNoteVersion(
      "v0.0.4",
      new Set<Task>()
        .add(new Task("[ODN-0002]", "Create basic lights in Menu tool and Handle in Tree node.vWe can create Directional, spot, point and hemisphere Lights. For now only intensity specular and diffuse in a new light panel."))
        .add(new Task("[ODN-0006]", "Added hide unhide option for containers in Tree node."))
        .add(new Task("[ODN-0011]", " Delete Container in Tree Node."))),

    new ReleaseNoteVersion(
      "v0.0.5",
      null,
      new Set<Task>()
        .add(new Task("[ODN-0019]", "Unify styles from light and material panel in common style"))
        .add(new Task("[ODN-0015]", "Replace text label Tool Menu by icons in the side of Tree node Menu"))
        .add(new Task("[ODN-0023]", "Refactor CanvasHelper class to service "))
        .add(new Task("[ODN-0025]", "Hide Transform panel properties when is selected a hemisphereLight in Tree Node ")),
      new Set<Task>()
        .add(new Task("[ODN-0009]", "Fix decimal numbers from transform tool to 3 digits"))
        .add(new Task("[ODN-0004]", "Transform tool dont refresh value in Mesh Rotation")))

  ];
  constructor() { }

}