import { Contact } from "./contact"
import { Education } from "./education"
import { Experience } from "./experience"
import { Guild } from "./guild"
import { Interests } from "./interests"
import { Profile } from "./profile"
import { Skill } from "./skill"

export interface IUserBody {
    profile: Profile
    contact: Contact
    education: Education[]
    experience: Experience[]
    skill: Skill[]
    interests: Interests[]
    guild: Guild[]
}
